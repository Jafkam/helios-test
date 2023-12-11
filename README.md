## Helios Test

### What did I build 

I have chosen wizard form funneling system as its the approach I would most likely use in a real scenario. 

I am utilising React Context and React's useReducer to navigate between form pages.

For the forms I'm using React Hook Forms to handle form submissions as well as validation.

The state can of course be modified to whatever data strucuture you would prefer. Right now it provides the data relevant to each form the user completes. 

### Trade offs

To save time: 
* I have not used a TypeScript or a schema validator (e.g yup/zod) to save time.

* I have not modified the console.log data received from state to replicate what might be sent to the API. 

Using the wizard form funnel system did take a little bit more time as we keep the user on one page during their journey. An alterntive method with quicker setup would be to create a routing system with each form on its own page. 


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


