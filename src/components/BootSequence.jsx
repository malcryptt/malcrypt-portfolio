import React, { useState, useEffect } from 'react';
import './BootSequence.css';

const BootSequence = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);

    const bootLogs = [
        "INITIALIZING CORE_KERNEL...",
        "AUTHENTICATING MALCRYPT_IDENTITY...",
        "ESTABLISHING SECURE_TUNNEL...",
        "LOADING_MODULE: OFFENSIVE_SECURITY",
        "LOADING_MODULE: NEURAL_ENGINE",
        "LOADING_MODULE: WEB_INFRASTRUCTURE",
        "SYNCING DATABASE_CLUSTERS...",
        "SYSTEM_READY."
    ];

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine < bootLogs.length) {
                setLines(prev => [...prev, bootLogs[currentLine]]);
                setProgress(((currentLine + 1) / bootLogs.length) * 100);
                currentLine++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 800);
            }
        }, 300);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="boot-sequence">
            <div className="boot-terminal">
                <div className="terminal-header">MALCRYPT_OS v2.0.4</div>
                <div className="terminal-body">
                    {lines.map((line, idx) => (
                        <div key={idx} className="terminal-line">
                            <span className="line-prefix">{'>'}</span> {line}
                        </div>
                    ))}
                    <div className="boot-progress-container">
                        <div className="boot-progress-bar" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BootSequence;
