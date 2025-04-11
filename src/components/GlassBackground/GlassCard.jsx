import React from 'React';
import './GlassCard.css'

function GlassCard({ children, className = "", align = "center", padding = "20px" }) {
    const alignmentClass = `align-${align}`;

    return (
        <div className={`glass-background ${alignmentClass} ${className}`} style={{ padding }}>
            {children}
        </div>
    );
}

export default GlassCard;
