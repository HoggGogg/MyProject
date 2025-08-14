import React, { useState } from "react";

interface Stats {
    hp: number;
    critRate: number;
    critDamage: number;
    atk: number;
    elementBonus: number;
    basicAttackBonus: number;
    resonansSkillBonus: number;
    resonansLiberationBonus: number;
    heavyAttackBonus: number;
}

interface Props {
    onSubmit: (stats: Stats) => void;
}

const StatsForm: React.FC<Props> = ({ onSubmit }) => {
    const [stats, setStats] = useState<Stats>({
        hp: 0,
        critRate: 0,
        critDamage: 0,
        atk: 0,
        elementBonus: 0,
        basicAttackBonus: 0,
        resonansSkillBonus: 0,
        resonansLiberationBonus: 0,
        heavyAttackBonus: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStats({ ...stats, [e.target.name]: Number(e.target.value) });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(stats);
    };

    return (
        <form className="stats-form" onSubmit={handleSubmit}>
            {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="input-group">
                    <label>{key.replace(/([A-Z])/g, " $1")}</label>
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
            <button type="submit">Указать желаемые статы</button>
        </form>
    );
};

export default StatsForm;