import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  
  const student = {
    name: 'Mohopolo Macheli',
    studentNumber: '901015229',
    profilePicture: require('./assets/Assignment 1.jpg'),
    currentSemester: 'January 2024',
    semesterGrades: [
      { semester: 'August 2023', grades: ['A', 'B', 'C'] },
      { semester: 'January 2024', grades: ['B', 'B', 'A'] },
      { semester: 'August 2022', grades: ['A', 'A', 'A'] },
    ],
  };


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/backg.jpg')} style={styles.bgImage}>
      </ImageBackground>
      <Image source={student.profilePicture} style={styles.profileImage} />
      <Text style={styles.text}>{student.name}</Text>
      <Text style={styles.text}>Student Number: {student.studentNumber}</Text>
      <Text style={styles.text}>Current Semester: {student.currentSemester}</Text>
      <Text style={styles.heading}>Semester Results:</Text>
      {student.semesterGrades.map((item, index) => (
        <View key={index}>
          <Text style={styles.text}>{item.semester}</Text>
          <View style={styles.gradesContainer}>
            {item.grades.map((grade, idx) => (
              <Text key={idx} style={styles.grade}>{grade}</Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  gradesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  grade: {
    marginRight: 10,
    fontSize: 16,
  },
  bgImage: {
    flex: 1,
    resizeMode: "contain",
    width: 1920,
    height: 1080,
  },
});

export default ProfileScreen;

