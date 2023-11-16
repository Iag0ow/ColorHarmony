import {
  Avatar,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { dadosUsuario, editaUsuario } from "../../utils/Config";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { data: User } = useQuery({
    queryKey: ["DadosUser"],
    queryFn: async () => dadosUsuario(),
  });

  const [dados, setDados] = useState();

  useEffect(() => {
    setDados(User);
  }, [User]);

  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [erro, setErro] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const edita = async () => {
    const form = {
      ...(username && { username }),
      ...(email && { email }),
    };

    const dadosEditado = await editaUsuario(form);
    if (dadosEditado != "Algo deu errado") {
      setDados(dadosEditado);
      onClose();
    } else {
      setErro("Algo deu errado, tente novamente mais tarde...");
    }
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container borda1 d-flex justify-content-center align-items-center">
          <div className="carProfile ">
            <div className="d-flex w-100  justify-content-end">
              <div className="me-2 mt-2" onClick={onOpen}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </div>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center w-100 pb-4">
              <Avatar
                size="2xl"
                src="../../img/default-profile"
              />
              <Text className="text-wrap text-center fs-1 m-0" noOfLines={1}>
                {dados?.username}
              </Text>
              <div className="d-flex align-items-center">
                <Text
                  className="text-wrap text-center fs-6 m-0 me-2"
                  noOfLines={1}
                  fontSize="xs"
                >
                  {dados?.email}
                </Text>
              </div>
            </div>
            <div className="d-flex justify-content-end me-3">
              <Button><Link to="/">Voltar</Link></Button>
            </div>
          </div>
        </div>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edite seus dados</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Seu nome"
                  onChange={(e) => setusername(e.target.value)}
                  value={username}
                />
                <FormLabel mt={4}>E-mail</FormLabel>
                <Input
                  placeholder="Seu e-mail"
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                />
                <p>{erro}</p>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={edita}>
                Salvar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
