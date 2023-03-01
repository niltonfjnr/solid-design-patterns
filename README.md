# SOLID PRINCIPLES
* SINGLE RESPONSABILITY
    - A class should only have one reason to change
    - Separation of concerns - different classes handling different, independent tasks/problems

* OPEN-CLOSED
    - Classes should be open to extension but closed for modification

* LISKOV SUBSTITUTION
    - You should be able to substitute a base type for a subtype

* INTERFACE SEGREGATION
    - Don't put too much into a interface; split into separated interfaces
    - YAGNI - You Ain't Going to Need It

* DEPENDENCY INVERSION
    - High level modules should not depend upo low level ones; use abstractions

# DESIGN PATTERNS (Gamma Categorization of GoF)
* CREATIONAL
    - Deal with the creation (construction) of objects
    - Explicit (constructor) vs. implicit (DI, reflection, etc.)
    - Wholesale (single statement) vs. piecewise (step-by-step)
    
* STRUCTURAL
    - Concerned with the structure (e.g., class members)
    - Many patterns are wrappers that mimic the underlyig class interface
    - Stress the importance of good API design

* BEHAVIORAL
    - They are all different; no central theme
