import { maintenancePlans } from '../../data/plans'

export default defineEventHandler((): MaintenancePlan[] => maintenancePlans)
