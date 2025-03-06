import { useState, useEffect } from 'react';
import { usePlayer } from '@/src/context/PlayerContext';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONTS } from '@/src/constants/theme';
import { FontAwesome } from '@expo/vector-icons';

export default function SettingsScreen() {
  const { playerName, setPlayerName } = usePlayer();
  const [localName, setLocalName] = useState(playerName);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setLocalName(playerName);
  }, [playerName]);

  const handleSave = () => {
    setPlayerName(localName.trim());
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const isChanged = localName.trim() !== playerName;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Player Settings</Text>
      <View style={styles.separator} />

      <View style={styles.settingContainer}>
        <Text style={styles.label}>Player Name:</Text>
        <TextInput
          style={styles.input}
          value={localName}
          onChangeText={setLocalName}
          placeholder="Enter your name"
          placeholderTextColor={COLORS.textSecondary}
          maxLength={20}
          testID="player-name-input"
        />

        <TouchableOpacity
          style={[styles.button, !isChanged && styles.disabledButton]}
          onPress={handleSave}
          disabled={!isChanged}
        >
          <FontAwesome name="save" size={16} color={COLORS.white} />
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

        {showSuccess && (
          <View style={styles.successMessage}>
            <FontAwesome name="check-circle" size={16} color={COLORS.success} />
            <Text style={styles.successText}>Settings saved!</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.large,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONTS.xLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.medium,
  },
  settingContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SPACING.medium,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: FONTS.medium,
    color: COLORS.text,
    marginBottom: SPACING.small,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.medium,
    fontSize: FONTS.medium,
    color: COLORS.text,
    marginBottom: SPACING.large,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: SPACING.medium,
    gap: SPACING.small,
  },
  disabledButton: {
    backgroundColor: COLORS.textSecondary,
    opacity: 0.7,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.medium,
    fontWeight: '600',
  },
  successMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.small,
    marginTop: SPACING.medium,
  },
  successText: {
    color: COLORS.success,
    fontSize: FONTS.medium,
  },
});
