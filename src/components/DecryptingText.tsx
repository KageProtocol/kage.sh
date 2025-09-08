import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

interface DecryptingTextProps {
  messages: string[];
  className?: string;
  charChangeInterval?: number; // Time between character changes during decryption
  messageChangeInterval?: number; // Time before switching to next message
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export const DecryptingText: React.FC<DecryptingTextProps> = ({
  messages,
  className = '',
  charChangeInterval = 50,
  messageChangeInterval = 5000,
}) => {
  const [currentText, setCurrentText] = useState(messages[0]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDecrypting, setIsDecrypting] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const decryptText = useCallback((targetText: string) => {
    let currentIndex = 0;
    let result = Array(targetText.length).fill('');
    let isComplete = false;

    const decrypt = () => {
      if (isComplete) return;

      // Update a random position that hasn't been decrypted yet
      const remainingIndices = result
        .map((char, index) => char === '' ? index : -1)
        .filter(index => index !== -1);

      if (remainingIndices.length === 0) {
        isComplete = true;
        setIsDecrypting(false);
        return;
      }

      const randomIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
      result[randomIndex] = targetText[randomIndex];
      setCurrentText(result.map(char => char === '' ? characters[Math.floor(Math.random() * characters.length)] : char).join(''));

      setTimeout(decrypt, charChangeInterval);
    };

    decrypt();
  }, [charChangeInterval]);

  useEffect(() => {
    const switchMessage = () => {
      setIsDecrypting(true);
      const nextIndex = (currentMessageIndex + 1) % messages.length;
      setCurrentMessageIndex(nextIndex);
      decryptText(messages[nextIndex]);
    };

    if (!isDecrypting) {
      const timer = setTimeout(switchMessage, messageChangeInterval);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, isDecrypting, messages, messageChangeInterval, decryptText]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && router.isReady) {
      // Start decryption after initial mount to avoid hydration mismatch
      const timer = setTimeout(() => {
        decryptText(messages[0]);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMounted, router.isReady]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={className}>
      {currentText.split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
};

