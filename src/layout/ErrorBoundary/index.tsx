import React from 'react'
import images from '~/assets/icon-image/images'
import { ErrorBoundaryProps } from './const'
import styles from './index.module.less'

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error: unknown) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log('error==>', error, errorInfo)
  }

  render() {
    return this.state.hasError ? (
      <div className={styles.box}>
        <img src={images.error0} className={styles.errorIcon} />
        <div className={styles.errorBox}>
          <div className={styles.errorText}>Unknown error occurred</div>
          <div
            className={styles.errorBtn}
            onClick={() => window.location.reload()}
          >
            Retry
          </div>
        </div>
      </div>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
