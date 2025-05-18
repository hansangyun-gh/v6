/**
 * 공통 타입 정의
 * @description 평가 결과, 모델, 프롬프트 등 프론트엔드 공용 인터페이스
 */

/**
 * 평가 결과 타입
 */
export interface EvaluationResult {
  id: string;
  score: number;
  summary: string;
}

/**
 * LLM 모델 타입
 */
export interface LLMModel {
  id: string;
  name: string;
}

/**
 * 프롬프트 타입
 */
export interface Prompt {
  name: string;
  value: string;
}

/**
 * LLM 평가 요청 타입 (다중 파일 지원)
 */
export interface EvaluationRequest {
  files: File[];
  prompt: string;
  model: string;
}

/**
 * LLM 평가 응답 타입 (다중 파일 지원)
 */
export interface EvaluationResponse {
  results: EvaluationResult[];
} 