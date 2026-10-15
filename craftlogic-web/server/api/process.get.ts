import { processSteps } from '../data/process'

export default defineEventHandler((): ProcessStep[] => processSteps)
