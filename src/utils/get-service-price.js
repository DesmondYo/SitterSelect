import { ServiceTypes } from "../config/sitter-types";

/**
   * Calculates the price based on service
   * 
   * @returns service price
   */
 export function getServicePrice(serviceType, hours) {
    if(serviceType === ServiceTypes.Babysitting) {
      return hours * 18;
    } else if(serviceType === ServiceTypes.ChildTutoring) {
      return hours * 45;
    } else if(serviceType === ServiceTypes.KidsPortation) {
      return null;
    } else if (serviceType === ServiceTypes.PetSitting) {
      // If there were multiple selected date, 1 would be replaced
      // with the days in between the start and end date
      return 70 * 1;
    }
  }