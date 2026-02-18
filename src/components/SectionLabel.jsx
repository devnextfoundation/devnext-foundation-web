import React from 'react';

/**
 * Reusable section label with a green dot indicator.
 * Used consistently across all sections as a category/tag label.
 */
const SectionLabel = ({ children, className = '' }) => {
    return (
        <div className={`inline-flex items-center space-x-2 font-semibold ${className}`}>
            <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0"></span>
            <span className="text-black">{children}</span>
        </div>
    );
};

export default SectionLabel;
