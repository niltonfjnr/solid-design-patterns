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
        # 1. BUILDER
        - Some objects are simple and can be created in a single initializer call
        - Other objects require a lot of ceremony to create
        - Having an object with 10 initializer arguments is not productive
        - Instead, opt for piecewise construction
        - Builder provides an API for constructing an object step-by-step
        - When piecewise object construction is complicated, provide an API for doing it succintly


* STRUCTURAL
    - Concerned with the structure (e.g., class members)
    - Many patterns are wrappers that mimic the underlyig class interface
    - Stress the importance of good API design

* BEHAVIORAL
    - They are all different; no central theme
