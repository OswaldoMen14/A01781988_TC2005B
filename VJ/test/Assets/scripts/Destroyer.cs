using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Eliminates balls xd 
/// </summary>
public class Destroyer : MonoBehaviour
{
    void OnCollisionEnter2D(Collision2D col) 
    {
        Destroy(col.gameObject);
    }
}
