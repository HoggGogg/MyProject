import React, { useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (desiredStats: Record<string, number>) => void;
    currentStats: Record<string, number>;
}

const DesiredStatsModal: React.FC<Props> = ({ isOpen, onClose, onSubmit, currentStats }) => {
    const [desiredStats, setDesiredStats] = useState(currentStats);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesiredStats({ ...desiredStats, [e.target.name]: Number(e.target.value) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(desiredStats);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose} aria-label="Закрыть"></button>
                <h2>Желаемые статы</h2>
                <form onSubmit={handleSubmit}>
                    {Object.entries(desiredStats).map(([key, value]) => (
                        <div key={key} className="input-group">
                            <label>
                                {key.replace(/([A-Z])/g, " $1")
                                    .split(' ')
                                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                                    .join(' ')
                                }
                            </label>
                            <input
                                type="number"
                                name={key}
                                value={value}
                                onChange={handleChange}
                                min={0}
                                step="any"
                            />
                        </div>
                    ))}
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default DesiredStatsModal;