/**
 * 프롬프트 서비스 (RESTful API 연동)
 * @description 프롬프트를 서버에 저장/불러오기/삭제/수정
 */
import axios from 'axios';
import { Prompt } from '../types/interfaces';

const API_BASE = process.env.VITE_API_BASE_URL
  ? `${process.env.VITE_API_BASE_URL}/api/prompts`
  : process.env.REACT_APP_API_BASE_URL
    ? `${process.env.REACT_APP_API_BASE_URL}/api/prompts`
    : '/api/prompts';
console.log('API_BASE:', API_BASE);
console.log('VITE_API_BASE_URL:', process.env.VITE_API_BASE_URL);
console.log('REACT_APP_API_BASE_URL:', process.env.REACT_APP_API_BASE_URL);

/**
 * 모든 프롬프트 목록 조회
 */
export async function fetchPrompts(): Promise<Prompt[]> {
  try {
    const res = await axios.get(API_BASE);
    return res.data.prompts;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || '프롬프트 목록 조회 실패');
  }
}

/**
 * 프롬프트 저장
 */
export async function savePrompt(prompt: Prompt): Promise<void> {
  try {
    await axios.post(API_BASE, prompt);
  } catch (error: any) {
    throw new Error(error.response?.data?.error || '프롬프트 저장 실패');
  }
}

/**
 * 프롬프트 불러오기 (이름 기준)
 */
export async function fetchPromptByName(name: string): Promise<Prompt> {
  try {
    const res = await axios.get(`${API_BASE}/${encodeURIComponent(name)}`);
    return res.data.prompt;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || '프롬프트 불러오기 실패');
  }
}

/**
 * 프롬프트 삭제
 */
export async function deletePrompt(name: string): Promise<void> {
  try {
    await axios.delete(`${API_BASE}/${encodeURIComponent(name)}`);
  } catch (error: any) {
    throw new Error(error.response?.data?.error || '프롬프트 삭제 실패');
  }
}

/**
 * 프롬프트 수정
 */
export async function updatePrompt(name: string, value: string): Promise<void> {
  try {
    await axios.put(`${API_BASE}/${encodeURIComponent(name)}`, { value });
  } catch (error: any) {
    throw new Error(error.response?.data?.error || '프롬프트 수정 실패');
  }
} 