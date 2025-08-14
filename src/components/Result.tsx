import React from "react";

interface Props {
    current: Record<string, number>;
    desired: Record<string, number>;
}

const Result: React.FC<Props> = ({ current, desired }) => {
    const improvements = Object.entries(desired).map(([key, value]) => {
        const diff = value - (current[key] || 0);
        return (
            <li key={key}>
                {key.replace(/([A-Z])/g, " $1")}: {diff > 0 ? `+${diff}` : diff === 0 ? "OK" : `${diff} (снизить)`}
            </li>
        );
    });

    return (
        <div className="result">
            <h3>Рекомендации по улучшению сборки:</h3>
            <ul>{improvements}</ul>
        </div>
    );
};

export default Result;