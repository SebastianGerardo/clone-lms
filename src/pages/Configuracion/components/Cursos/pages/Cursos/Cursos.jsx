import React, { useContext, useState } from "react";
import { useEffect } from "react";
import TableBasic from "../../../../../../components/Tables/TableBasic";
import { UserContext } from "../../../../../../context/ContextLms";
import { TraeDataCursos } from "../../../../../../helpers/ApiConfiguracion";
import { ModalCursos } from "../../modals/ModalCursos";
import {ContentTableCursos, ColumnsCursos } from "../../tables/TableCursos";

const Cursos = ({setCursoActual, setNombreCurso, setCursoSeleccionado}) => {
  const {token} = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false);
  const [dataCursos, setDataCursos] = useState([]);
  const [dataCurso, setDataCurso] = useState({});
  const [recargarTabla, setRecargarTabla] = useState(false);

  useEffect(() => {
    TraeDataCursos(token).then((res) => {
      setDataCursos(res.data)
    })
  }, [recargarTabla])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setDataCurso({});
    setIsOpen(false);
  };

  const {columnsCursos} = ColumnsCursos({
    setCursoActual: setCursoActual,
    setNombreCurso: setNombreCurso,
    handleOpenModal: handleOpenModal,
    setDataCurso: setDataCurso,
    recargarTabla: recargarTabla,
    setRecargarTabla: setRecargarTabla,
    token: token,
    setCursoSeleccionado: setCursoSeleccionado
  });

  const propsModal = {
    isOpen:isOpen,
    handleCloseModal:handleCloseModal,
    token:token,
    dataCurso:dataCurso,
    setRecargarTabla:setRecargarTabla, 
    recargarTabla:recargarTabla, 
    setIsOpen:setIsOpen
  }

  dataCursos.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className="p-8 pt-0">
      <ContentTableCursos handleOpenModal={handleOpenModal} dataCursos={dataCursos} />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-y-12">
        <TableBasic
          columns={columnsCursos}
          data={dataCursos}
          highlightOnHover
          striped
          onRowClicked={(row) => console.log(row)}
          pointerOnHover
        />
      </div>
      <ModalCursos {...propsModal} />
    </section>
  );
};

export default Cursos;

