export const Config = {
  useInternalCache: false,
  clearInternalCache: false,
  staffInformation: {
    staffId: 'test',
    staffName: 'Yong Jian Ming',
    staffPassword: 'test',
  },
  patientInformation: {
    patientId: 'PA001',
    patientName: 'Mr Boon',
    patientConditions: ['Diabetes', 'Fall Prone'],
    patientReminders: [
      {
        dateTime: 1572273647,
        description: "Doctor's Appointment",
      },
      {
        dateTime: 1572273647,
        description: 'Operation',
      },
    ],
  },

  /**Patient SOAP**/
  PatientS: [
    {
      Date: "21/10/2019",
      Desc: "Patient suffered a cardiac arrest and concussion to the head at about 0915 hours at his home." +
        "Paramedics arrived on the scene at about 0925 hours. " +
        "Patient was found lying on the floor. An AED was used to revive the patient as no heartbeat was found by the paramedics. " +
        "Patient was brought into the ambulance and admitted into the emergency ward." +
        "Patient has a history of diabetes and is fall prone."
    },
  ],
  PatientO: [
    {
      Date: 

    },
  ],
};
