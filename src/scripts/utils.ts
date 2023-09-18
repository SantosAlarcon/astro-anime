export function getNavigationType(fromPath, toPath) {
  if (fromPath.startsWith('/animes') && toPath === '/') {
    return 'anime-to-home'
  }

  if (fromPath === '/' && toPath.startsWith('/animes')) {
    return 'home-to-anime'
  }

  if (fromPath.startsWith('/animes') && toPath.startsWith('/people')) {
    return 'anime-to-person'
  }

  if (fromPath.startsWith('/people') && toPath.startsWith('/animes')) {
    return 'person-to-anime'
  }

  return 'other'
}

export function isBackNavigation(navigateEvent: any) {
  if (
    navigateEvent.navigationType === 'push' ||
    navigateEvent.navigationType === 'replace'
  ) {
    return false
  }
  if (
    navigateEvent.destination.index !== -1 &&
    navigateEvent.destination.index < navigation.currentEntry.index
  ) {
    return true
  }
  return false
}

export function shouldNotIntercept(navigationEvent: any) {
  return (
    navigationEvent.canIntercept === false ||
    // If this is just a hashChange,
    // just let the browser handle scrolling to the content.
    navigationEvent.hashChange ||
    // If this is a download,
    // let the browser perform the download.
    navigationEvent.downloadRequest ||
    // If this is a form submission,
    // let that go to the server.
    navigationEvent.formData
  )
}

export function getPathId(path: string) {
  return path.split('/')[2]
}

export function updateTheDOMSomehow(data: any | null) {
  document.getElementById('content').innerHTML = data
}

export function useTvFragment(navigateEvent: any) {

  const toUrl = new URL(navigateEvent.destination.url)
  const toPath = toUrl.pathname

  return toPath.startsWith('/tv')
}
