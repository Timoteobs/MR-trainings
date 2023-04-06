import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Select,
  ButtonGroup
} from '@chakra-ui/react'

type Inputs = {
  name: string
  weight: string
};

type InputsTraining = {
  sheetName: string
  sheetsections: string
  description: string
  token: string
  order: number
  series: string
  repetitions: string
  interval: string
}

type User = {
  name: string
  weight: string
}

type Sheet = {
  sheetName: string
  sheetsections: string
  exercises: Exercise[]
}

type Exercise = {
  description: string
  token: string
  order: number
  series: string
  repetitions: string
  interval: string
}

const { innerWidth: width, innerHeight: height } = window;
const dataSheets = [
  {
    id: 1,
    sheetName: "Hipertrofia",
    sheetsections: 12
  },
  {
    id: 2,
    sheetName: "Emagrecimento",
    sheetsections: 12
  }
]
const Students: React.FC = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure()

  const {
    isOpen: isOpenNewTraining,
    onOpen: onOpenNewtraining,
    onClose: onCloesNewtraining
  } = useDisclosure()

  const {
    isOpen: isOpenNewSheet,
    onOpen: onOpenNewSheet,
    onClose: onCloesNewSheet
  } = useDisclosure()

  const [user, setUser] = useState<Array<User>>([{ name: "Timóteo", weight: "150" }])
  const [trainings, setTrainings] = useState<Array<InputsTraining>>([])

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const {
    register: registerTraining,
    handleSubmit: handleSubmitTraining,
    formState: { errors: errosTraining }
  } = useForm<InputsTraining>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    setUser([...user, data])
  };

  const onSubmitTrainings: SubmitHandler<InputsTraining> = data => {
    console.log(data)
  };

  return (
    <>
      <Flex
        gap={'15px'}
        mb='25px'
      >
        <Button colorScheme='blue' onClick={onOpen}>Adicionar novo aluno</Button>
      </Flex>
      <Box
        overflowY='scroll'
        maxH={innerHeight / 2 + 200}
        pb='30px'
      >
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input placeholder='Nome' {...register("name")} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Peso</FormLabel>
                  <Input placeholder='peso' {...register("weight")} />
                </FormControl>
                <Flex mt={3}>
                  <Button colorScheme='blue' mr={3} type='submit'>
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </Flex>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Flex
          wrap='wrap'
          gap='20px'
        >
          {user.map((el: User, index) => (
            <Card
              key={index}
              maxW='300px'
              mt='25px'
              as='button'
            >
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{el.name}</Heading>
                  <Text>{el.weight} kg</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Flex>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenNewTraining}
          onClose={onCloesNewtraining}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Adicione novo Exercício</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form onSubmit={handleSubmitTraining(onSubmitTrainings)}>
                <FormControl>
                  <FormLabel>Divisão</FormLabel>
                  <Select placeholder='Select a divisão'  {...registerTraining("token")} >
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option>
                    <option value='E'>E</option>
                    <option value='F'>F</option>
                    <option value='G'>G</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Nome da ficha</FormLabel>
                  <Input placeholder='Nome' {...registerTraining("description")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Ordem</FormLabel>
                  <Input placeholder='ordem' {...registerTraining("order")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input placeholder='Nome' {...registerTraining("name")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Ordem</FormLabel>
                  <Input placeholder='ordem' {...registerTraining("name")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input placeholder='Nome' {...registerTraining("name")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input placeholder='Nome' {...registerTraining("name")} />
                </FormControl>
                <Flex mt={3}>
                  <Button colorScheme='blue' mr={3} type='submit'>
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancel</Button>
                </Flex>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Modal isOpen={isOpenNewSheet} onClose={onCloesNewSheet}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Fichas de treino</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {dataSheets.map((el, index) => {
                return (
                  <Card
                    key={index}
                    mb='15px'
                    as='button'
                    w='100%'
                  >
                    <CardBody>
                      <Text>{el.sheetName}</Text>
                    </CardBody>
                  </Card>
                );
              })}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Nova ficha
              </Button>
              <Button
                variant='ghost'
                onClick={onCloesNewSheet}
              >
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Box>
    </>

  );
}

export default Students;