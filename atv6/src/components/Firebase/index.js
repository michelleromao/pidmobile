import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Firebase = () => {
  const [student, setStudent] = useState();

  const getStudent = useCallback(async () => {
    const studentDocument = await firestore()
      .collection('alunos')
      .doc('lD2DIZzRMVVfYJ8tfYvF')
      .get();
    setStudent(studentDocument._data);
  }, []);

  useEffect(() => {
    getStudent();
  }, [getStudent]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.project}>Firebase - Firestore</Text>
      </View>
      <Text style={styles.project}>Aluna</Text>
      {student && (
        <View style={styles.content}>
          <Text style={styles.text}>
            Curso: <Text style={styles.details}>{student.curso}</Text>
          </Text>
          <Text style={styles.text}>
            Nome: <Text style={styles.details}>{student.nome}</Text>
          </Text>
          <Text style={styles.text}>
            Idade: <Text style={styles.details}>{student.idade}</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default Firebase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'snow',
  },
  header: {
    width: '100%',
    padding: '10%',
    marginBottom: '50%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
  },
  project: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
  },
  content: {
    marginTop: '10%',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'teal',
  },
  details: {
    fontWeight: '500',
    color: 'teal',
  },
});
