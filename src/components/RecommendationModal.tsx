import React from "react";

interface Props {
    current: Record<string, number>;
    desired: Record<string, number>;
    isOpen: boolean;
    onClose: () => void;
}

const RecommendationModal: React.FC<Props> = ({ current, desired, isOpen, onClose }) => {
    if (!isOpen) return null;

    const improvements = Object.entries(desired).map(([key, value]) => {
        const diff = value - (current[key] || 0);
        const statName = key.replace(/([A-Z])/g, " $1")
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
        return (
            <li key={key}>
                {statName}: {diff > 0 ? `+${diff}` : diff === 0 ? "OK" : `${diff} (Снизить)`}
            </li>
        );
    });

    return (
        <div className="recommend-modal-overlay">
            <div className="recommend-modal-content">
                <button className="recommend-close-btn" onClick={onClose} aria-label="Закрыть"></button>
                <h3>Рекомендации по улучшению сборки</h3>
                <ul>{improvements}</ul>
            </div>
        </div>
    );
};

export default RecommendationModal;