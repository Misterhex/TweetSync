---
layout: post
title: Value-object
categories:
- tweets
---
Monday, June 25, 2007
Generic Value Object Equality
I read a post from Oren the other day where he posted some code for a generic Entity base type that implemented the correct equality logic.  I realized that I've needed a generic base type for Value Objects as well.
Value Object Requirements
In the Domain Driven Design space, a Value Object :
Has no concept of an identity
Two different instances of a Value Object with the same values are considered equal
Describes a characteristic of another thing
Is immutable
Unfortunately, in nearly all cases I've run in to, we can't use Value Types in .NET to represent Value Objects.  Value Types ( struct ) have some size limitations (~16 bytes or less), which we run into pretty quickly.  Instead, we can create a Reference Type ( class ) with Value Type semantics, similar to the .NET String type.  The String type is a Reference Type, but exhibits Value Type semantics, since it is immutable.  For a Reference Type to exhibit Value Type semantics, it must:
Be immutable
Override the Equals method, to implement equality instead of identity, which is the default
Additionally, Framework Design Guidelines has some additional requirements I must meet:
Provide a reflexive, transitive, and symmetric implementation of Equals
Override GetHashCode
Override the equality operators
Generic Implementation
What I wanted was a base class that would give me all of the Framework Design Guidelines requirements as well as the Domain Driven Design requirements, without any additional logic from concrete types.  Here's what I ended up with:
public abstract class ValueObject<T> : IEquatable<T>
    where T : ValueObject<T>
    }
}
I borrowed a little bit from the .NET ValueType base class for the implementation of Equals.  The ValueObject<T> type uses reflection to access and compare all internal fields for Equals, as well as for GetHashCode.  All implementers will need to do is to ensure that their concrete type is immutable, and they're done.
I could probably optimize the reflection calls and cache them, but this implementation is mainly for reference anyway.
The Tests
Just for completeness, I'll include the set of NUnit tests I used to write this class up.  I think the tests describe the intended behavior well enough.
[TestFixture]
