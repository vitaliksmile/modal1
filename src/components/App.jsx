import Modal from './Modal/Modal';
import React, { useState } from 'react';
import './App.css';
export const App = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="app">
      <main>
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Open modal
        </button>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ut qui quasi ad molestias, iste nihil repudiandae earum,
          vitae, incidunt sed harum! Pariatur alias perspiciatis repellendus
          quidem incidunt itaque vitae.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ut qui quasi ad molestias, iste nihil repudiandae earum,
          vitae, incidunt sed harum! Pariatur alias perspiciatis repellendus
          quidem incidunt itaque vitae.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ut qui quasi ad molestias, iste nihil repudiandae earum,
          vitae, incidunt sed harum! Pariatur alias perspiciatis repellendus
          quidem incidunt itaque vitae.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ut qui quasi ad molestias, iste nihil repudiandae earum,
          vitae, incidunt sed harum! Pariatur alias perspiciatis repellendus
          quidem incidunt itaque vitae.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ut qui quasi ad molestias, iste nihil repudiandae earum,
          vitae, incidunt sed harum! Pariatur alias perspiciatis repellendus
          quidem incidunt itaque vitae.
        </p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque,
          alias delectus beatae enim blanditiis accusamus consequatur quisquam,
          quae ab eius in voluptatem. Nostrum omnis commodi eligendi itaque
          voluptates id?
        </p>
      </Modal>
    </div>
  );
};
