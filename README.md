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

        # 1. BUILDER | BUILDER FACETS (INNER/NESTED)
        __When piecewise object construction is complicated, provide an API for doing it succintly__
        ### Motivation
        - Some objects are simple and can be created in a single initializer call
        - Other objects require a lot of ceremony to create
        - Having an object with 10 initializer arguments is not productive
        - Instead, opt for piecewise construction
        - Builder provides an API for constructing an object step-by-step
        
        ### Summary
        - A builder is a separate component for building an object
        - Can either give builder an initializer or return it via a static function
        - To make builder fluent, return self
        - Different facets of an object can be built with different builders working in tandem via a base class
        <br>&nbsp;

        # 2. FACTORY | FACTORY METHOD | ABSTRACT FACTORY
        __A component responsible solely for the wholesale (not piecewise) creation of objects__
        ### Motivation
        - Object creation logic becomes too convoluted
        - Initializer is not descriptive
            - Name is always \__init__
            - Cannot overload with same set of arguments with different names
            - Can turn into "optional parameter hell"
        - Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to
            - A reparated method (Factory Method)
            - That may exist in a reparate class (Factory)
            - Can create hierarchy of factories with Abstract Factory
        <br>&nbsp;

        # 3. PROTOTYPE
        __OK__
        ### Motivation
        - OK
        <br>&nbsp;

        # 4. OK
        __OK__
        ### Motivation
        - OK
        <br>&nbsp;

* STRUCTURAL
    - Concerned with the structure (e.g., class members)
    - Many patterns are wrappers that mimic the underlyig class interface
    - Stress the importance of good API design

* BEHAVIORAL
    - They are all different; no central theme
