import React from 'react';
import './GlassCard.css'
import React from 'react';
import './glassbackground.css';

function GlassCard({ children, className = "", align = "center", padding = "20px" }) {
    const alignmentClass = `align-${align}`;

    return (
        <div className={`glass-background ${alignmentClass} ${className}`} style={{ padding }}>
            {children}
        </div>
    );
}

export default GlassCard;
