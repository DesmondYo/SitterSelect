import {ServiceTypes} from '../config/sitter-types';

/**
 * Calculates the price based on service
 *
 * @returns service price
 */
export function getServicePrice(serviceType, hours) {
  if (serviceType === ServiceTypes.ChildTutoring) {
    return hours * 45;
  } else if (serviceType === ServiceTypes.PetsHouseSittingDropin) {
    return hours * 30;
  } else if (serviceType === ServiceTypes.Babysitting) {
    return hours * 18;
  } else if (serviceType === ServiceTypes.PetHouseSittingOvernight) {
    return 70 * 1;
  } else if (serviceType === ServiceTypes.KidsPortation) {
    return null;
  } else {
    return null;
  }
}
