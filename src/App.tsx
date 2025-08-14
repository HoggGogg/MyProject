import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsForm from "./components/StatsForm";
import DesiredStatsModal from "./components/DesiredStatsModal";
import "./App.css";
import RecommendationModal from "./components/RecommendationModal.tsx";

const App: React.FC = () => {
    const [currentStats, setCurrentStats] = useState<Record<string, number> | null>(null);
    const [desiredStats, setDesiredStats] = useState<Record<string, number> | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const [recommendOpen, setRecommendOpen] = useState(false);

    <RecommendationModal
        current={currentStats!}
        desired={desiredStats!}
        isOpen={recommendOpen}
        onClose={() => setRecommendOpen(false)}
    />

    const handleDesiredSubmit = (stats: Record<string, number>) => {
        setDesiredStats(stats);
        setRecommendOpen(true);
    };

    const handleStatsSubmit = (stats: Record<string, number>) => {
        setCurrentStats(stats);
        setModalOpen(true);
    };

    return (
        <div className="app-bg">
            <Header />
            <main>
                <StatsForm onSubmit={handleStatsSubmit}/>
                <DesiredStatsModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleDesiredSubmit}
                    currentStats={currentStats || {
                        hp: 0, critRate: 0, critDamage: 0, atk: 0, elementBonus: 0,
                        basicAttackBonus: 0, resonansSkillBonus: 0, resonansLiberationBonus: 0, heavyAttackBonus: 0 }}
                />
            </main>
            <Footer />
            {}
            <RecommendationModal
                current={currentStats!}
                desired={desiredStats!}
                isOpen={recommendOpen}
                onClose={() => setRecommendOpen(false)}
            />
        </div>
    );
};

export default App;