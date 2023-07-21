import { OpenAIModel } from './openai';

export interface BaseUsage {
    block_id: string;
    occurence : number;
    type: "tool" | "llm" | "recommendation";
}

export interface LLMUsage extends BaseUsage {
    type: "llm";
    block_id: string;
    occurence : number;
    agent_scratchpad: string;
    input: string;
    prompt: string;
    response: string;
}


export interface ToolUsage extends BaseUsage {
    type: "tool";
    block_id: string;
    occurence : number;
    thought: string;
    tool_name: string;
    tool_description: string;
    tool_input: string;
    output: string;
}

export interface Tool {
  tool_name: string;
  tool_desc: string;
}
export interface ToolRecommendation extends BaseUsage {
  type: "recommendation";
  occurence : number;
  block_id: string;
  recommendations: Tool[];
}

export interface Message {
  role: Role;
  content: string;
  tools: ToolUsage[] | LLMUsage[];
  recommendations: ToolRecommendation[];
}

export type Role = 'assistant' | 'user';

export interface ChatBody {
  model: OpenAIModel;
  messages: Message[];
  key: string;
  prompt: string;
  temperature: number;
}

export interface Conversation {
  id: string;
  name: string;
  messages: Message[];
  model: OpenAIModel;
  prompt: string;
  temperature: number;
  folderId: string | null;
}
