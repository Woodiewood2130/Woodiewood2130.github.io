import './AccessibilityEnhancer.css'

function AccessibilityEnhancer() {
    const handleSkipToContent = () => {
        const mainContent = document.getElementById('main-content')
        if (mainContent) {
            mainContent.focus()
            mainContent.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* Skip to Content Link */}
            <a 
                href="#main-content" 
                className="skip-to-content"
                onClick={handleSkipToContent}
            >
                Skip to main content
            </a>

            {/* ARIA Live Region for dynamic content updates */}
            <div 
                id="live-region" 
                aria-live="polite" 
                aria-atomic="true" 
                className="sr-only"
            ></div>
        </>
    )
}

export default AccessibilityEnhancer