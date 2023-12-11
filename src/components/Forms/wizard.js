

import { Children } from 'react';
import { WizardProvider, useWizard } from '../../context/wizard';


function WizardStep({ render, id }) {
    const ctx = useWizard();
    return ctx.currentId === id ? (
        <div key={id} >
            {render(ctx)}
        </div>
    ) : null;
}

function Wizard({ children }) {
    const steps = Children.map(children, ({ props: { id } }) => id);
    return <WizardProvider steps={steps}>{children}</WizardProvider>;
}

Wizard.Step = WizardStep;

export default Wizard;
