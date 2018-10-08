const transitionDuration = 300

const defaults = {
  errors: {
    controlled:
      'A component is changing a react-medium-image-zoom component from a controlled component to an uncontrolled one. ImageZoom elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component.',
    uncontrolled:
      'A component is changing a react-medium-image-zoom component from an uncontrolled component to a controlled one. ImageZoom elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component.'
  },
  styles: {
    image: {
      cursor: 'zoom-in'
    },
    zoomImage: {
      cursor: 'zoom-out',
      position: 'absolute',
      transition: `transform ${transitionDuration}ms`,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transformOrigin: 'center center',
      willChange: 'transform, top, left'
    },
    zoomContainer: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 999
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#fff',
      opacity: 0,
      transition: `opacity ${transitionDuration}ms`
    },
    directLink: {
      position: 'absolute',
      right: 0,
      bottom: '20px',
      left: '50%',
      marginLeft: '-100px',
      width: '150px',
      textAlign: 'center',
      borderRadius: '20px',
      color: '#fff',
      textDecoration: 'none',
      padding: '5px 10px',
      backgroundColor: 'rgba(0, 0, 0, .85)',
      opacity: 0,
      zIndex: 10,
      transition: `opacity ${transitionDuration}ms`
    }
  },
  transitionDuration
}

export default defaults
