import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { resolveModelId } from "@/constants/model";

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY || "placeholder",
  ...(process.env.OPENAI_BASE_URL
    ? { baseURL: process.env.OPENAI_BASE_URL }
    : {}),
});

export const anthropic = createAnthropic({
  ...(process.env.ANTHROPIC_API_KEY
    ? { apiKey: process.env.ANTHROPIC_API_KEY }
    : {}),
});

const googleApiKey =
  process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY;
export const google = createGoogleGenerativeAI({
  ...(googleApiKey ? { apiKey: googleApiKey } : {}),
});

export function getModel(modelId?: string) {
  const raw = typeof modelId === "string" ? modelId.trim() : undefined;
  const id = resolveModelId(raw);

  if (raw && raw !== id) {
    console.warn(
      `[ai/provider] invalid model "${raw}", falling back to "${id}"`,
    );
  }

  if (id.startsWith("anthropic/")) {
    const modelName = id.replace("anthropic/", "");
    return anthropic(modelName);
  }

  if (id.startsWith("google/")) {
    const modelName = id.replace("google/", "");
    return google(modelName);
  }

  if (id.startsWith("google-ai-studio/")) {
    const modelName = id.replace("google-ai-studio/", "");
    return google(modelName);
  }

  return openai.chat(id);
}
