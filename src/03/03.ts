import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
  st.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

export  function makeStudentActive(s: StudentType) {
  s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
  return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
  return building.budget += budget;
}
//
// export const demolishHousesOnTheStreet = () => {
//
// }

export const repairHouse = (houseType: HouseType) => {
  houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
  return building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingType, toHireCountStuff: number) {
  return building.staffCount += toHireCountStuff;
}

export function createMessage(props: CityType) {
  return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`
}