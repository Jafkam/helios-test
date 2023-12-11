import { useReducer } from 'react';

function seqWizardReducer(state, action) {
    const { history, info } = state;
    switch (action.type) {
        case 'next': {
            const { id, data } = action;
            const currentId = history[history.length - 1];

            if (!id || currentId === id) {
                return state;
            }
            const newHistory = history.slice();
            newHistory.push(id);

            return {
                ...state,
                info: {
                    ...info,
                    [currentId]: { ...info[currentId], data },
                },
                history: newHistory,
            };
        }

    }
}

function seqWizardInit(steps) {
    return {
        history: [steps[0]],
        info: steps.reduce((obj, id, idx) => {
            obj[id] = {
                data: {},
                idx,
            };
            return obj;
        }, {}),
    };
}

function useSeqWizard({ steps }) {
    const [state, dispatch] = useReducer(seqWizardReducer, { history: [], info: {} }, () => seqWizardInit(steps));
    const { history: stepHistory, info: stepsInfo } = state;

    const currentId = stepHistory[stepHistory.length - 1];
    const idx = stepsInfo[currentId].idx;
    const isLastStep = steps.length - 1 === idx;

    return {
        stepsInfo,
        currentId,
        currentIdx: idx,
        isLastStep,
        dispatch,
    };
}

export { useSeqWizard };
