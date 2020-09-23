import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

// Não possuem valor semantico (significado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex e flex-direction: column"

// View: div, footer, header, main, aside, section, etc...
// Text: p, span, strong, h1, h2, h3, etc...

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects',
      {
        title: `Novo projeto ${Date.now()}`,
        owner: "Jonatas"
      }
    );

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text key={project.id} style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    padding: 10
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
