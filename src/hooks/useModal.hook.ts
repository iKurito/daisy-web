/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';
import { SubjectManager } from '../models';

const useModal = (dialogSubject$: SubjectManager<boolean>) => {
  const [open, setOpen] = useState(false);
  let subject$ = new Subscription();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    subject$ = dialogSubject$.getSubject.subscribe((data) => {
      if (data) handleClickOpen();
      else handleClose();
    });
    return () => {
      subject$.unsubscribe();
    };
  }, []);

  return { open };
};

export default useModal;
