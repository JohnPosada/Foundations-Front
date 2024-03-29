import { createSlice } from "@reduxjs/toolkit";
import { initialValuesStepForm } from "../../foundations/data/stepFormModel/initialValuesStepForm";
import { BasicInformationMember } from "../../foundations/interface/basicInformationMember.interface";
import { member } from "../../foundations/interface/member.interface";

interface foundationsSliceState {
  id: string;
  name: string;
  identification: string;
  address: string;
  adminEmail: string;
  phone: string;
  email: string;
  logo: string;
  description: string;
  created_at: string;
  members: BasicInformationMember[];
}

interface foundationState {
  activeFoundation: foundationsSliceState;
  activeMember: member;
  queryMembers: member[];
}

const initialState: foundationState = {
  activeFoundation: {
    id: "",
    identification: "",
    name: "",
    address: "",
    adminEmail: "",
    phone: "",
    email: "",
    logo: "",
    description: "",
    created_at: "",
    members: [],
  },
  activeMember: initialValuesStepForm,
  queryMembers: [],
};

export const foundationSlice = createSlice({
  name: "foundations",
  initialState,
  reducers: {
    setActiveFoundation: (state, { payload }) => {
      state.activeFoundation = payload;
      state.activeMember = initialState.activeMember;
    },
    setActiveMember: (state, { payload }) => {
      state.activeMember = payload;
    },
    setQueryMembers: (state, { payload }) => {
      state.queryMembers = payload;
    },
    removeQueryMembers: (state) => {
      state.queryMembers = [];
    },
  },
});

export const {
  setActiveFoundation,
  setActiveMember,
  setQueryMembers,
  removeQueryMembers,
} = foundationSlice.actions;
