// Owner: Jacqueline

import React from "react";
import {View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

// SearchBar lets users enter and clear a recipe or ingredient search.
export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <View style={styles.container}>
      {/* Controlled text input; updates the search state as the user types. */}
      <TextInput
        style={styles.input}
        placeholder="Search by recipe name or ingredient..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={onSearchChange}
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Search recipes"
      />

      {/* Show the clear button only when there is search text. */}
      {searchText.length > 0 && (
        <TouchableOpacity
          onPress={() => onSearchChange("")}
          style={styles.clearButton}
          accessibilityLabel="Clear search"
        >
          <Text style={styles.clearText}>✕</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

// Styles for the search container, text input, and clear button.
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  clearButton: {
    padding: 10,
  },
  clearText: {
    fontSize: 18,
    color: "#666",
  },
});
