import type StudentInterface from './StudentInterface';

interface GroupInterface {
  id: number;
  name: string;
  contacts: string;
  students: StudentInterface[]; // добавляем студентов
};

export default GroupInterface;