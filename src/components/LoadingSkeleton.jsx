import './LoadingSkeleton.css'

function LoadingSkeleton({ type = 'card', count = 1 }) {
    const skeletons = Array.from({ length: count }, (_, index) => (
        <div key={index} className={`skeleton ${type}`}>
            {type === 'card' && (
                <>
                    <div className="skeleton-image shimmer"></div>
                    <div className="skeleton-content">
                        <div className="skeleton-title shimmer"></div>
                        <div className="skeleton-subtitle shimmer"></div>
                        <div className="skeleton-text shimmer"></div>
                        <div className="skeleton-text shimmer"></div>
                    </div>
                </>
            )}
            {type === 'text' && (
                <>
                    <div className="skeleton-line shimmer"></div>
                    <div className="skeleton-line shimmer"></div>
                    <div className="skeleton-line shimmer"></div>
                </>
            )}
            {type === 'avatar' && (
                <div className="skeleton-avatar shimmer"></div>
            )}
        </div>
    ))

    return <div className="skeleton-container">{skeletons}</div>
}

export default LoadingSkeleton