import { useSeqWizard } from "@/hooks/wizard";
import { useContext, createContext } from "react";

const WizardContext = createContext(null);

function WizardProvider({ children, steps, ...restProps }) {


    const { dispatch, ...ctx } = useSeqWizard({ steps });

    // can add other reducer dispatch methods here

    const submit = (data, { id = steps[ctx.currentIdx + 1] } = {}) => {
        dispatch({ type: "next", id, data });
    };

    return (
        <WizardContext.Provider value={{ ...ctx, submit }} {...restProps}>
            {children}
        </WizardContext.Provider>
    );
}

function useWizard() {
    return useContext(WizardContext);

}

export { WizardProvider, useWizard };
