export const Config = {
  useInternalCache: true,
  clearInternalCache: true,
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
};
