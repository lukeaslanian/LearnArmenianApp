import React from 'react';
import { LearningModule } from '../data/learningModules';

interface ModuleNavigationProps {
  modules: LearningModule[];
  currentModule: string | null;
  completedModules: string[];
  onModuleSelect: (moduleId: string) => void;
}

export const ModuleNavigation: React.FC<ModuleNavigationProps> = ({
  modules,
  currentModule,
  completedModules,
  onModuleSelect
}) => {
  const isModuleUnlocked = (module: LearningModule) => {
    // First module (module1) is always unlocked
    if (module.id === 'module1') return true;
    if (!module.prerequisite) return true;
    return completedModules.includes(module.prerequisite);
  };

  const getModuleIcon = (module: LearningModule) => {
    if (completedModules.includes(module.id)) {
      return '✓';
    } else if (currentModule === module.id) {
      return '📖';
    } else if (isModuleUnlocked(module)) {
      return '●';
    } else {
      return '🔒';
    }
  };

  const getModuleStatus = (module: LearningModule) => {
    if (completedModules.includes(module.id)) {
      return 'completed';
    } else if (currentModule === module.id) {
      return 'current';
    } else if (isModuleUnlocked(module)) {
      return 'available';
    } else {
      return 'locked';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Learning Modules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => {
          const status = getModuleStatus(module);
          const isDisabled = status === 'locked';
          
          return (
            <button
              key={module.id}
              onClick={() => !isDisabled && onModuleSelect(module.id)}
              disabled={isDisabled}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                status === 'completed'
                  ? 'bg-green-50 border-green-500 text-green-800'
                  : status === 'current'
                  ? 'bg-blue-50 border-blue-500 text-blue-800'
                  : status === 'available'
                  ? 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100'
                  : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{getModuleIcon(module)}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  module.difficulty === 'beginner' 
                    ? 'bg-green-100 text-green-800'
                    : module.difficulty === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {module.difficulty}
                </span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{module.title}</h3>
              <p className="text-xs opacity-75">{module.description}</p>
              {module.prerequisite && status === 'locked' && (
                <p className="text-xs mt-2 text-red-500">
                  Complete previous module to unlock
                </p>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};