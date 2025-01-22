import React from 'react';
import './glassbackground.css'

function GlassBackground({children}) {
    return (
       <div className="glass-background">
           {children}
       </div>
    );
}

export default GlassBackground;