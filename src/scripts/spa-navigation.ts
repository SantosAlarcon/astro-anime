import {
    getNavigationType,
    getPathId,
    isBackNavigation,
    shouldNotIntercept,
    updateTheDOMSomehow,
    useTvFragment,
} from './utils'

// View Transitions support cross-document navigations.
// Should compare performace.
// https://github.com/WICG/view-transitions/blob/main/explainer.md#cross-document-same-origin-transitions
// https://github.com/WICG/view-transitions/blob/main/explainer.md#script-events
function shouldDisableSpa() {
    return false;
}

navigation.addEventListener('navigate', (navigateEvent) => {
    if (shouldDisableSpa()) return
    if (shouldNotIntercept(navigateEvent)) return

    const toUrl = new URL(navigateEvent.destination.url)
    const toPath = toUrl.pathname
    const fromPath = location.pathname
    const navigationType = getNavigationType(fromPath, toPath)

    if (location.origin !== toUrl.origin) return

    switch (navigationType) {
        case 'home-to-anime':
            handleHomeToAnimeTransition(navigateEvent, getPathId(toPath))
            break
        case 'anime-to-home':
            handleAnimeToHomeTransition(navigateEvent, getPathId(fromPath))
            break
        case 'anime-to-person':
            handleAnimeToPersonTransition(
                navigateEvent,
                getPathId(fromPath),
                getPathId(toPath)
            )
            break
        case 'person-to-anime':
            handlePersonToAnimeTransition(
                navigateEvent,
                getPathId(fromPath),
                getPathId(toPath)
            )
            break
        default:
            return
    }
})

// TODO: https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement
function handleHomeToAnimeTransition(navigateEvent, animeId) {
    navigateEvent.intercept({
        async handler() {
            const fragmentUrl = useTvFragment(navigateEvent)
                ? '../pages/fragments/TvDetails'
                : '../pages/fragments/AnimeDetails'
            const response = await fetch(`${fragmentUrl}/${animeId}`)
            const data = await response.text()

            if (!document.startViewTransition) {
                updateTheDOMSomehow(data);
                return;
            }

            const thumbnail = document.getElementById(`anime-poster-${animeId}`)
            if (thumbnail) {
                thumbnail.style.viewTransitionName = 'anime-poster'
            }

            const transition = document.startViewTransition(() => {
                if (thumbnail) {
                    thumbnail.style.viewTransitionName = ''
                }
                document.getElementById('container').scrollTop = 0
                updateTheDOMSomehow(data)
            })

            await transition.finished
        },
    })
}

function handleAnimeToHomeTransition(navigateEvent, animeId) {
    navigateEvent.intercept({
        scroll: 'manual',
        async handler() {
            const fragmentUrl = useTvFragment(navigateEvent)
                ? '/fragments/TvList'
                : '/fragments/AnimeList'
            const response = await fetch(fragmentUrl)
            const data = await response.text()

            if (!document.startViewTransition) {
                updateTheDOMSomehow(data)
                return
            }

            const tempHomePage = document.createElement('div')
            const animePoster = document.getElementById(`anime-poster`)
            let thumbnail

            // If the anime poster is not in the home page, removes the transition style so that
            // the poster doesn't stay on the page while transitioning
            tempHomePage.innerHTML = data
            if (!tempHomePage.querySelector(`#anime-poster-${animeId}`)) {
                animePoster?.classList.remove('anime-poster')
            }

            const transition = document.startViewTransition(() => {
                updateTheDOMSomehow(data)

                thumbnail = document.getElementById(`anime-poster-${animeId}`)
                if (thumbnail) {
                    thumbnail.scrollIntoViewIfNeeded()
                    thumbnail.style.viewTransitionName = 'anime-poster'
                }
            })

            await transition.finished

            if (thumbnail) {
                thumbnail.style.viewTransitionName = ''
            }
        },
    })
}

function handleAnimeToPersonTransition(navigateEvent, animeId, personId) {
    // TODO: https://developer.chrome.com/docs/web-platform/view-transitions/#not-a-polyfill
    // ...has example of `back-transition` class applied to document
    const isBack = isBackNavigation(navigateEvent)

    navigateEvent.intercept({
        async handler() {
            const response = await fetch('/fragments/PersonDetails/' + personId)
            const data = await response.text()

            if (!document.startViewTransition) {
                updateTheDOMSomehow(data)
                return
            }

            let personThumbnail
            let animePoster
            let animeThumbnail

            if (!isBack) {
                // We're transitioning the person photo; we need to remove the transition of the poster
                // so that it doesn't stay on the page while transitioning
                animePoster = document.getElementById(`anime-poster`)
                if (animePoster) {
                    animePoster.classList.remove('anime-poster')
                }

                personThumbnail = document.getElementById(`people-${personId}`)
                if (personThumbnail) {
                    personThumbnail.style.viewTransitionName = 'person-photo'
                }
            }

            const transition = document.startViewTransition(() => {
                updateTheDOMSomehow(data)

                if (personThumbnail) {
                    personThumbnail.style.viewTransitionName = ''
                }

                if (isBack) {
                    // If we're coming back to the person page, we're transitioning
                    // into the anime poster thumbnail, so we need to add the tag to it
                    animeThumbnail = document.getElementById(`poster-${animeId}`)
                    if (animeThumbnail) {
                        animeThumbnail.scrollIntoViewIfNeeded()
                        animeThumbnail.style.viewTransitionName = 'anime-poster'
                    }
                }

                document.getElementById('container').scrollTop = 0
            })

            await transition.finished

            if (animeThumbnail) {
                animeThumbnail.style.viewTransitionName = ''
            }
        },
    })
}

function handlePersonToAnimeTransition(navigateEvent: any, personId: number, animeId: number) {
    const isBack = isBackNavigation(navigateEvent)

    navigateEvent.intercept({
        scroll: 'manual',
        async handler() {
            const fragmentUrl = useTvFragment(navigateEvent)
                ? '/fragments/TvDetails'
                : '/fragments/AnimeDetails'
            const response = await fetch(`${fragmentUrl}/${animeId}`)
            const data = await response.text()

            if (!document.startViewTransition) {
                updateTheDOMSomehow(data)
                return
            }

            let thumbnail
            let animePoster
            let animeThumbnail

            if (!isBack) {
                animeThumbnail = document.getElementById(`poster-${animeId}`)
                if (animeThumbnail) {
                    animeThumbnail.style.viewTransitionName = 'anime-poster'
                }
            }

            const transition = document.startViewTransition(() => {
                updateTheDOMSomehow(data)

                if (isBack) {
                    animePoster = document.getElementById(`anime-poster`)
                    if (animePoster) {
                        animePoster.classList.remove('anime-poster')
                    }

                    if (personId) {
                        thumbnail = document.getElementById(`people-${personId}`)
                        if (thumbnail) {
                            thumbnail.scrollIntoViewIfNeeded()
                            thumbnail.style.viewTransitionName = 'person-photo'
                        }
                    }
                } else {
                    document.getElementById('container').scrollTop = 0

                    if (animeThumbnail) {
                        animeThumbnail.style.viewTransitionName = ''
                    }
                }
            })

            await transition.finished

            if (thumbnail) {
                thumbnail.style.viewTransitionName = ''
            }

            if (animePoster) {
                animePoster.classList.add('anime-poster')
            }
        },
    })
}
