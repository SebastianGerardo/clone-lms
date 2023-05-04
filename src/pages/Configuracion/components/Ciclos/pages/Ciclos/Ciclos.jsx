import React, { useContext, useState } from "react";
import { useEffect } from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { UserContext } from "../../../../../../context/ContextLms";
import { TraeDataCiclos } from "../../../../../../helpers/ApiConfiguracion/ApiCiclos";
import { TraeDataLearning } from "../../../../../../helpers/ApiConfiguracion/ApiLearningPath";
import { ModalCiclo } from "../../modals/ModalCiclo";
import {ContentTableCiclos, ColumnsCiclos } from "../../tables/TableCiclos";

const Ciclos = ({setCursoActual, setNombreCurso, setCursoSeleccionado}) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [dataCiclos, setDataCiclos] = useState([]);
  const [dataLearning, setDataLearning] = useState([]);
  const [dataSeleccionada, setDataSeleccionada] = useState({});
  const [recargarTabla, setRecargarTabla] = useState(false);

  useEffect(() => {
    TraeDataCiclos(token).then((res) => {
      setDataCiclos(res.data);
    });
  }, [recargarTabla])
  
  useEffect(() => {
    TraeDataLearning(token).then((res) => {
      setDataLearning(res.data);
    });
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setDataSeleccionada({});
    setIsOpen(false);
  };

  const {columnsCiclos} = ColumnsCiclos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    setDataSeleccionada: setDataSeleccionada,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    token: token,
    setCursoSeleccionado: setCursoSeleccionado
  });

  return (
    <section className="p-8 pt-0">
      <ContentTableCiclos handleOpenModal={handleOpenModal} dataCiclos={dataCiclos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsCiclos}
          data={dataCiclos}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
        <ModalCiclo isOpen={isOpen} handleCloseModal={handleCloseModal} dataLearning={dataLearning} token={token} dataSeleccionada={dataSeleccionada} setRecargarTabla={setRecargarTabla} recargarTabla={recargarTabla} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Ciclos;
