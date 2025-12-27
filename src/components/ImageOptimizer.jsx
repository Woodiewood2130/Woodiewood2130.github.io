import './ImageOptimizer.css'

function ImageOptimizer({ src, alt, className, ...props }) {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [hasError, setHasError] = React.useState(false)

    const handleLoad = () => {
        setIsLoaded(true)
    }

    const handleError = () => {
        setHasError(true)
    }

    // Generate responsive image sources
    const getSrcSet = (baseSrc) => {
        if (!baseSrc || baseSrc === '/images/coming-soon.jpg') return ''
        
        const extension = baseSrc.split('.').pop()
        const baseName = baseSrc.replace(`.${extension}`, '')
        
        return `${baseName}-small.${extension} 480w, ${baseName}-medium.${extension} 768w, ${baseName}-large.${extension} 1200w`
    }

    // Generate sizes attribute for responsive images
    const getSizes = () => {
        return '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'
    }

    return (
        <div className={`image-optimizer ${className || ''}`}>
            {!isLoaded && !hasError && (
                <div className="image-placeholder shimmer">
                    <div className="placeholder-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="placeholder-text">Loading...</span>
                </div>
            )}
            
            {hasError && (
                <div className="image-error">
                    <div className="error-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <span className="error-text">Image not available</span>
                </div>
            )}

            {src && !hasError && (
                <img
                    src={src}
                    srcSet={getSrcSet(src)}
                    sizes={getSizes()}
                    alt={alt}
                    onLoad={handleLoad}
                    onError={handleError}
                    className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    decoding="async"
                    {...props}
                />
            )}
        </div>
    )
}

export default ImageOptimizer