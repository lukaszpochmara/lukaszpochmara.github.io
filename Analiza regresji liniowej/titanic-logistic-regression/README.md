# Titanic Logistic Regression

Projekt pokazuje prosty proces budowy modelu regresji logistycznej na danych Titanic.  
Celem modelu jest przewidzenie, czy pasażer przeżył katastrofę na podstawie podstawowych cech, takich jak klasa biletu, płeć, wiek, liczba członków rodziny na pokładzie, cena biletu oraz port wejścia na statek.

## Cel projektu

Celem projektu jest przećwiczenie pełnego, podstawowego procesu Machine Learning:

1. wczytanie danych,
2. wstępna analiza danych,
3. analiza braków danych,
4. czyszczenie danych,
5. kodowanie zmiennych kategorycznych,
6. podział danych na zbiór treningowy i testowy,
7. trenowanie modelu regresji logistycznej,
8. ocena jakości modelu,
9. interpretacja wyników.

## Wykorzystane technologie

- Python
- Pandas
- NumPy
- Matplotlib
- scikit-learn
- Quarto

## Zbiór danych

W projekcie wykorzystano klasyczny zbiór danych Titanic.

Zmienna celu:

```text
Survived
0 = pasażer nie przeżył
1 = pasażer przeżył
```

Wybrane cechy użyte w modelu:

| Kolumna | Znaczenie |
|---|---|
| `Pclass` | klasa biletu |
| `Sex` | płeć pasażera |
| `Age` | wiek pasażera |
| `SibSp` | liczba rodzeństwa/małżonków na pokładzie |
| `Parch` | liczba rodziców/dzieci na pokładzie |
| `Fare` | cena biletu |
| `Embarked` | port wejścia na pokład |

## Zakres analizy

Projekt obejmuje:

- sprawdzenie struktury danych,
- sprawdzenie braków danych,
- imputację braków w kolumnie `Age` medianą,
- imputację braków w kolumnie `Embarked` dominantą,
- one-hot encoding zmiennych kategorycznych,
- podział danych z użyciem `train_test_split`,
- trenowanie modelu `LogisticRegression`,
- ocenę modelu za pomocą:
  - accuracy,
  - precision,
  - recall,
  - F1-score,
  - confusion matrix,
  - ROC AUC.

## Najważniejsze wnioski

Regresja logistyczna dobrze nadaje się do prostych problemów klasyfikacji binarnej.  
W projekcie najważniejsze było pokazanie całego procesu pracy z danymi, a nie wyłącznie uzyskanie jak najwyższego wyniku.

Projekt pokazuje, że przed trenowaniem modelu trzeba:

- zrozumieć dane,
- sprawdzić braki,
- poprawić problemy jakości danych,
- zakodować zmienne tekstowe,
- oddzielić dane treningowe od testowych,
- oceniać model kilkoma metrykami, a nie tylko accuracy.

## Struktura projektu

```text
titanic-logistic-regression/
├── _quarto.yml
├── index.qmd
├── logistic_regression.qmd
├── styles.css
├── README.md
├── data/
│   └── titanic.csv
├── images/
└── docs/
```

## Uruchomienie projektu lokalnie

Aby uruchomić projekt lokalnie, należy mieć zainstalowane Quarto oraz wymagane biblioteki Pythona.

```bash
quarto preview
```

Aby wyrenderować stronę do folderu `docs`:

```bash
quarto render
```

## Autor

Łukasz Pochmara  
Projekt do portfolio Data Science / Machine Learning.