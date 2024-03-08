import { OPEN_AI } from "./constant";







// Access your API key as an environment variable (see "Set up your API key" above)
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: OPEN_AI, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,

});
export default openai
